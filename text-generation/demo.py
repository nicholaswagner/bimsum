import argparse
import numpy as np
import torch
from pathlib import Path

from dataset import Dataset
from model import Model


def predict(n, dataset, model) -> str:
    model.eval()
    context_size = 10
    state_h, state_c = model.init_state(context_size)
    seed_words_idxs = np.random.randint(0, len(dataset.uniq_words), size=(context_size,))
    words = [dataset.index_to_word[i] for i in seed_words_idxs]

    while len(words) < n + context_size:
        x = torch.tensor([[dataset.word_to_index[w] for w in words[-context_size:]]])
        y_pred, (state_h, state_c) = model(x, (state_h, state_c))

        last_word_logits = y_pred[0][-1]
        p = torch.nn.functional.softmax(last_word_logits, dim=0).detach().numpy()
        word_index = np.random.choice(len(last_word_logits), p=p)
        words.append(dataset.index_to_word[word_index])

    return ' '.join(words[context_size:])


def gen_paragraph(num_sentences: int, dataset, model):
    paragraph = []
    while len(paragraph) < num_sentences:
        l = np.random.randint(5, 15)
        sentence_raw = predict(l, dataset, model)
        sentence = sentence_raw.capitalize() + '.'
        paragraph.append(sentence)
    return paragraph


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('data', type=Path)
    parser.add_argument('model', help='Trained model checkpoint path.')
    parser.add_argument('--n', type=int, default=10, help='Number of words to generate.')
    args = parser.parse_args()

    dataset = Dataset(args)
    model = Model(dataset)
    model.load_state_dict(torch.load(args.model))
    generated_text = gen_paragraph(args.n, dataset, model)
    print(' '.join(generated_text))

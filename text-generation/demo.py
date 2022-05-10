import argparse
import numpy as np
import torch

from dataset import Dataset
from model import Model


def predict(dataset, model, text, next_words=100):
    model.eval()

    words = text.split(' ')
    state_h, state_c = model.init_state(len(words))

    for i in range(0, next_words):
        x = torch.tensor([[dataset.word_to_index[w] for w in words[i:]]])
        y_pred, (state_h, state_c) = model(x, (state_h, state_c))

        last_word_logits = y_pred[0][-1]
        p = torch.nn.functional.softmax(last_word_logits, dim=0).detach().numpy()
        word_index = np.random.choice(len(last_word_logits), p=p)
        words.append(dataset.index_to_word[word_index])

    return words


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('data')
    parser.add_argument('model', help='Trained model checkpoint path.')
    parser.add_argument('--n', type=int, default=10, help='Number of words to generate.')
    args = parser.parse_args()

    dataset = Dataset(args)
    model = Model(dataset)
    model.load_state_dict(torch.load(args.model))
    print(predict(dataset, model, text='Knock knock. Whos there?'))

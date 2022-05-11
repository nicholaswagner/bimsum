import argparse
import numpy as np
import torch
from flask import Flask, json, Response
from flask_cors import CORS, cross_origin

from pathlib import Path

from dataset import Dataset
from model import Model
from demo import gen_paragraph

dataset = None
model = None
api = Flask(__name__)
CORS(api)

def package_data(data):
    return Response(json.dumps({"data": data}), mimetype='application/json')


@api.route('/word', methods=['GET'])
def get_word():
    generated_text = gen_paragraph(1, dataset, model)
    data = generated_text[0].split(' ')[0]
    return package_data(data)


@api.route('/sentence', methods=['GET'])
def get_sentence():
    generated_text = gen_paragraph(1, dataset, model)
    data = generated_text[0]
    return package_data(data)


@api.route('/paragraph', methods=['GET'])
def get_paragraph():
    num_sentences = np.random.randint(5, 10)
    generated_text = gen_paragraph(num_sentences, dataset, model)
    data = ' '.join(generated_text)
    return package_data(data)


@api.route('/story', methods=['GET'])
def get_story():
    story = []
    num_paragraphs = np.random.randint(3, 5)
    for _ in range(num_paragraphs):
        num_sentences = np.random.randint(5, 10)
        generated_text = gen_paragraph(num_sentences, dataset, model)
        story.extend(generated_text + ['\n\n'])
    data = ' '.join(story)
    return package_data(data)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('data', type=Path)
    parser.add_argument('model', help='Trained model checkpoint path.')
    args = parser.parse_args()
    dataset = Dataset(args)
    model = Model(dataset)
    model.load_state_dict(torch.load(args.model))
    api.run()

import argparse
from nltk import word_tokenize
from pathlib import Path


def clean(filepath: Path):
    text = filepath.read_text()
    try:
        words = word_tokenize(text)
    except LookupError:
        import nltk
        nltk.download('punkt')
        words = word_tokenize(text)
    filepath_clean = Path(f"{filepath.with_suffix('')}_clean.txt")
    filepath_clean.write_text(' '.join(words))
    return filepath_clean


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('data', type=Path)
    args = parser.parse_args()
    clean_file = clean(args.data)
    print('Wrote', clean_file)

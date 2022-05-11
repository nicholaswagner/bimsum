import argparse
import langdetect
from langdetect.lang_detect_exception import LangDetectException
import textwrap
from nltk import word_tokenize
from pathlib import Path


def line_ok(line: str):
    try:
        if not langdetect.detect(line) == 'en':
            return False
    except LangDetectException:
        return False
    if line.count(' ') < 3:
        return False
    return True


def clean(filepath: Path):
    lines = [line.strip() for line in filepath.read_text().split('\n')]
    ok_lines = [line for line in lines if line_ok(line)]
    text = ' '.join(ok_lines)
    try:
        words = word_tokenize(text)
    except LookupError:
        import nltk
        nltk.download('punkt')
        words = word_tokenize(text)
    wrapped_text = textwrap.wrap(' '.join(words), 80)
    filepath_clean = Path(f"{filepath.with_suffix('')}_clean.txt")
    filepath_clean.write_text('\n'.join(wrapped_text))
    return filepath_clean


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('data', type=Path)
    args = parser.parse_args()
    clean_file = clean(args.data)
    print('Wrote', clean_file)

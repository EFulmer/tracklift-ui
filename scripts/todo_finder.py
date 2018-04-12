#!/usr/bin/env python
import os
import re


# TODO comments should be in the format "TODO (person) : description"
FANCY_TODO_RE = re.compile(r'// TODO (\([^)]*\)) : (.*)')


def get_todos(file):
    with open(file) as f:
        for linum, line in enumerate(f):
            match = FANCY_TODO_RE.search(line)
            if match:
                _, description = match.groups()
                print(f'{file}:{linum} - {description}')


def main():
    files = (os.path.join(dir_, f) for dir_, _, fs in os.walk('src')
             for f in fs
             if f.endswith('.js') or f.endswith('.jsx'))
    for file in files:
        get_todos(file)


if __name__ == '__main__':
    main()

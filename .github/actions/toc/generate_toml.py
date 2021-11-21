#!/usr/bin/env python3
import argparse
import csv
import os
import toml
import frontmatter

"""
This script reads a buttondown.email export, and generates
a [stork-search](https://stork-search.net) toml file for generating
a search index for the files.

A valid toml file looks like the following (from the docs):
    [input]
    base_directory = "my_files/"
    files = [
        {path = "federalist-1.txt", url = "/federalist-1/", title = "Introduction"},
        {path = "federalist-2.txt", url = "/federalist-2/", title = "Concerning Dangers from Foreign Force and Influence"},
        {path = "federalist-3.txt", url = "/federalist-3/", title = "Concerning Dangers from Foreign Force and Influence 2"}
    ]
    
    [output]
    filename = "federalist.st"
"""

def main(basedir, outfilename):
    toml_dict = {'output': {'filename': 'index.st'}}
    toml_dict['input'] = {'base_directory': basedir,
                          'url_prefix': 'https://www.researchcomputingteams.org/newsletter_issues/' }

    index_files = []
    pwd = os.getcwd()
    abs_basedir = os.path.join(pwd, basedir)
    files = os.listdir(abs_basedir)
    files.sort()
    for file in files:
        if file.endswith(".md"):
            with open(f"{abs_basedir}/{file}") as cursor:
                post = frontmatter.loads(cursor.read())
                print(f"{post['title']}")

                title = post['title']
                index_files.append({'path': f"{abs_basedir}/{file}",
                                    'url': f"{file.removesuffix('.md')}",
                                    'filetype': 'Markdown',
                                    'title': f"{title}"})

    toml_dict['input']['files'] = index_files
    with open(outfilename, 'w') as outfile:
        toml.dump(toml_dict, outfile)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Generate stork-search toml from buttondown export')
    parser.add_argument('basedir', default='./_newsetter_issues', help='base directory for articles')
    parser.add_argument('--output', default='output.toml', help='output toml file')
    args = parser.parse_args()
    main(args.basedir, args.output)

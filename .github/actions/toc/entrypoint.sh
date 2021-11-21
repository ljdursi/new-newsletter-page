#!/usr/bin/env bash
set -euo pipefail

readonly BINDIR="/usr/local/bin"

function generate_toc {
    local search_path="$1"
    local toc_file="$2"
    "${BINDIR}/generate_toml.py" "${search_path}" --output "${toc_file}"
}

function usage {
    local commandname="$1"
    >&2 echo "${commandname}: creates table of contents for a directory of markdown files"
    >&2 echo ""
    >&2 echo "Usage:"
    >&2 echo "    ${commandname} search_path output_toc_file"
    exit 1
}

if [[ ("${#}" == 2) ]]
then
    generate_toc "$1" "$2"
    echo "::set-output name=input_toc::${2}"
else
    usage "$0"
fi
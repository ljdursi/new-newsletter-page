#!/usr/bin/env bash
set -euo pipefail

readonly BINDIR="/usr/local/bin"

function generate_index {
    local toc_file="$1"
    local index_loc="$2"

    "${BINDIR}/stork" --build "${toc_file}" 
    mv index.st "${index_loc}"
}

function usage {
    local commandname="$1"
    >&2 echo "${commandname}: creates an index for a directory of markdown files given a table of contents"
    >&2 echo ""
    >&2 echo "Usage:"
    >&2 echo "    ${commandname} input_toc_file output_index"
    exit 1
}

if [[ ("${#}" == 2) ]]
then
    generate_index "$1" "$2"
else
    usage "$0"
fi
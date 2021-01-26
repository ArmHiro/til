#!/usr/bin/env bash

cd `dirname $0`

ls public/md/ -r | grep -v md.lst > public/md/md.lst

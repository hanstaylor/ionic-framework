#!/bin/bash

set -e

# Pack @nfdoom/ionic-core
npm pack ../core

# Install Dependencies
npm install *.tgz --no-save

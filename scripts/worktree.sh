#!/bin/bash

# worktree.sh - Create a new git worktree with copied dependencies
# Usage: ./worktree.sh <branch-name>

set -e

main() {
    local branch_name="$1"
    local current_dir="$(basename "$(pwd)")"
    local worktrees_dir="../${current_dir}-worktrees"
    local worktree_path="${worktrees_dir}/${branch_name}"

    if [ -z "$branch_name" ]; then
        echo "Error: Branch name is required"
        echo "Usage: $0 <branch-name>"
        exit 1
    fi

    echo "Setting up worktree for branch: $branch_name"
    echo "Worktree location: $worktree_path"
    echo "----------------------------------------"

    if [ ! -d "$worktrees_dir" ]; then
        echo "Creating worktrees directory: $worktrees_dir"
        mkdir -p "$worktrees_dir"
    fi

    echo "Creating git worktree and branch..."
    git worktree add -b "$branch_name" "$worktree_path"
    echo "✓ Worktree created successfully"

    if [ -d "node_modules" ]; then
        echo "Copying node_modules directory (this may take a while)..."
        cp -r node_modules "${worktree_path}/"
        echo "✓ node_modules copied"
    else
        echo "⚠️  Warning: node_modules directory not found, skipping copy"
    fi

    echo "Opening worktree with Cursor..."
    cursor "$worktree_path"
    echo "✓ Opened in Cursor"

    echo "----------------------------------------"
    echo "Worktree setup complete!"
    echo "Location: $worktree_path"
}

main "$@"

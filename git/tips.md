Restore files from past commit
---

get the version of the file from the given commit

`git checkout <commit> path/to/file`

get the last commit id

`git log --format="%H" -n 1`

check diff between commits in the dedicated directory

`git diff COMMIT_ID HEAD -- path/to/directory/*`

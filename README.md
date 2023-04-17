# Memo

## コマンド

- docker コマンド
`docker run --name tetrafall -id -p 8000:3000 -v /home/hal/volumes/tetrafall/:/app -u node --restart always node:18.8.0-buster /bin/bash`
- プロジェクト作成コマンド
`npx create-react-app tetrafall --template typescript`
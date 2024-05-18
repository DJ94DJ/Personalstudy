#!/bin/bash

# 입력 인자를 받음
input=$1

# 슬래시 제거
input="${input#/}"

# 쉼표를 기준으로 인자를 나눔
IFS=',' read -r commit_message commit_date <<< "$input"

# 공백 제거
commit_message=$(echo "$commit_message" | xargs)
commit_date=$(echo "$commit_date" | xargs)

# 디버깅 출력
echo "Commit Message: '$commit_message'"
echo "Commit Date: '$commit_date'"

# 현재 연도 가져오기
current_year=$(date +"%Y")

# 현재 시간 가져오기
current_time=$(date +"%H:%M:%S")

# 입력받은 월 일과 현재 연도를 결합
if [[ -n "$commit_date" ]]; then
  formatted_date="${current_year}-$(echo "$commit_date" | sed 's/\(..\)\(..\)/\1-\2/')"
  commit_datetime="${formatted_date}T${current_time}"
else
  echo "날짜가 입력되지 않았습니다."
  exit 1
fi

# 디버깅 출력
echo "Formatted Date: '$formatted_date'"
echo "Commit DateTime: '$commit_datetime'"

# 변경 사항을 스테이징 영역에 추가
git add .

# 커밋 시간 설정하고 커밋 메시지 앞에 :sparkles: 추가
GIT_AUTHOR_DATE="$commit_datetime" GIT_COMMITTER_DATE="$commit_datetime" git commit -m ":sparkles: $commit_message"

# 결과 출력
echo "커밋이 생성되었습니다. 메시지: ':sparkles: $commit_message', 시간: '$commit_datetime'"
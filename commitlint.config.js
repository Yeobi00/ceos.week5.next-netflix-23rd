module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', //새로운 기능
        'fix', //버그 수정
        'docs', //문서 변경
        'style', //코드 포매팅 (세미콜론 누락 등)
        'refactor', //리팩토링
        'perf', //성능 개선
        'test', //테스트 추가 및 수정
        'chore', //빌드 프로세스, 도구 변경
        'security', //보안 관련 변경
      ],
    ],
    'subject-case': [0], //제목 대문자 시작 가능
  },
};

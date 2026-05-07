export const productProfile = {
  "repository": "project-input-intake-workbench",
  "title": "入力・取り込みワークベンチ",
  "domain": "ProjectManagement",
  "hostApp": null,
  "rank": 61,
  "tier": "P2",
  "ideaNo": 3,
  "overview": "入力フォーム、外部データ取り込み、メタデータ編集を一連化する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "取り込み前の確認やメタ情報の抜けが後工程で見つかりやすい。",
  "differentiation": "Issue、PR、設計ドキュメント、エージェント作業、リリース証跡を同じ流れで扱う。 取り込み前プレビューと最低限のメタ情報を同じ手順に入れる。",
  "publish": "GitHub Release",
  "surface": "ProjectManagement product spec + CLI validation core",
  "entity": "intake item",
  "requiredFields": [
    "id",
    "title",
    "source",
    "owner",
    "priority",
    "acceptance"
  ],
  "warningField": "reviewNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};

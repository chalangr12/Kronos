export default class CodeSaver {
  static changesStructure = [];
  static pushChanges = changes => {
    if (changes.length) {
      for (const change of changes) {
        const lastchangeIndex = CodeSaver.changesStructure.findIndex(
          el => el.path === change.path
        );

        const newChange = {
          created_at:
            lastchangeIndex !== -1
              ? CodeSaver.changesStructure[lastchangeIndex].created
              : Date.now(),
          updated_at: Date.now(),
          path: change.path,
          content: change.code,
        };

        const newElementndex =
          lastchangeIndex !== -1
            ? lastchangeIndex
            : CodeSaver.changesStructure.length;
        CodeSaver.changesStructure.splice(newElementndex, 1, newChange);
      }
    }
    console.log(CodeSaver.changesStructure);
  };
}

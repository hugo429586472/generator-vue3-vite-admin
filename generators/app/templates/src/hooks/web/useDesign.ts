export function useDesign(scope: string) {
  return {
    prefixCls: `turing-${scope}`,
    prefixVar: "turing",
  };
}

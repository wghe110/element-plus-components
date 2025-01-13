export const patTreeFn = (tree, target = []) => {
  tree.forEach((item) => {
    const { childrens, ...others } = item;
    target.push({
      ...others,
    });

    childrens && childrens.length && patTreeFn(childrens, target);
  });

  return target;
};

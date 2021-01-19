export const convertSnapshotInArrayObjects = (snapshot) => {
  const values = snapshot.val();
  if (values) {
    const keys = Object.keys(values);
    return keys.map(id => ({ ...values[id], id }));
  }
  return null;
};

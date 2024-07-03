import "server-only"

export const serverSideFuction = () => {
  console.log(
    `use multiple libraries,
            interact with a database,
            process confidential information
        `
  );

  return 'server result';
};

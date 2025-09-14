export const addIntegers = async () => {
  return {
    tools: [
      {
        name: "add_integers",
        description: "Add two numbers and return the result",
        inputSchema: {
          type: "object",
          properties: {
            a: {
              type: "integer",
              description: "First Integer to add",
            },
            b: {
              type: "integer",
              description: "Second Integer to add",
            },
          },
          required: ["a", "b"],
        },
      },
    ],
  };
};
export const addIntegerCall = async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "add_integers") {
    const { a, b } = args;
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be number");
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error("Both arguments must be integer");
    }
    const result = a + b;
    return {
      content: [
        {
          type: "text",
          text: `${result}`,
        },
      ],
    };
  }
    
    throw new Error(`Unknown tool: ${name}`)
};
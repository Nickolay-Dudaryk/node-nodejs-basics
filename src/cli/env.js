const parseEnv = () => {
  const result = [];
  const entries = Object.entries(process.env);

  entries.forEach(([key, value]) => {
    if (key.startsWith("RSS_")) {
      result.push(`${key}=${value}`);
    }
  });

  console.log(result.join("; "));
};

parseEnv();

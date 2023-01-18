export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req, res) {
  const userResponse = await fetch("https://api.github.com/users/DemuraAIdev");
  const userReposResponse = await fetch(
    "https://api.github.com/users/DemuraAIdev/repos?per_page=100"
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository["stargazers_count"];
  }, 0);
  // get followers count
  const followers = user.followers;

  return res.status(200).json({ stars, followers });
}

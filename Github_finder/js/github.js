class Github {
  constructor() {
    this.client_id = 'bc9986608c2c72799b78';
    this.client_secret = '24ce8fd516e793b7779fe73e3bbb4807d3dfb266';
  }

  async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();

      return {
        profile
      }
  }
}
export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  resetDefault() {
    return this.defaultSettings;
  }

  setSettings(key, value) {
    if (!this.userSettings.has(key)) {
      this.userSettings.set(key, value);
    }
  }

  getSettings() {
    return new Map([...this.userSettings, ...this.defaultSettings]);
  }
}

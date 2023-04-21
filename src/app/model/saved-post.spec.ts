import { SavedPost } from './saved-post';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new SavedPost(1)).toBeTruthy();
  });
});

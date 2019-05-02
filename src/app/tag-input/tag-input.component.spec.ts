import {TagInputComponent} from './tag-input.component';

describe('Tag Component (isolated testing)', () => {
  it('should be instantiated with proper hint text and empty tag list', () => {
    const component: TagInputComponent = new TagInputComponent();
    expect(component).toBeDefined();
    expect(component.hint).toBe('Try some comma separated words');
    expect(component.tags).toEqual([]);
  });

  it('should be able to parse tags from the input text', () => {
    const component: TagInputComponent = new TagInputComponent();
    component.inputText = 'life, is, hard';
    component.onKey({key: 'Enter'});
    expect(component.tags).toEqual(['life', 'is', 'hard']);
  });

  it('should be able to delete a specific tag', () => {
    const component: TagInputComponent = new TagInputComponent();
    component.tags = ['life', 'is', 'hard'];
    component.onDelete(1);
    expect(component.tags).toEqual(['life', 'hard']);
  });
});

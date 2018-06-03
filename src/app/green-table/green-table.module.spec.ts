import { GreenTableModule } from './green-table.module';

describe('GreenTableModule', () => {
  let greenTableModule: GreenTableModule;

  beforeEach(() => {
    greenTableModule = new GreenTableModule();
  });

  it('should create an instance', () => {
    expect(greenTableModule).toBeTruthy();
  });
});

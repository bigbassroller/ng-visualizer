import { NgVisualizerPage } from './app.po';

describe('ng-visualizer App', function() {
  let page: NgVisualizerPage;

  beforeEach(() => {
    page = new NgVisualizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

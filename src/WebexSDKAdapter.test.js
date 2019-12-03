import WebexSDKAdapter from './WebexSDKAdapter';
import RoomsSDKAdapter from './RoomsSDKAdapter';
import createMockSDK from './__mocks__/sdk';

describe('Webex SDK Adapter', () => {
  let webexSDKAdapter, mockSDK;

  beforeEach(() => {
    mockSDK = createMockSDK();
    webexSDKAdapter = new WebexSDKAdapter(mockSDK);
  });

  afterEach(() => {
    webexSDKAdapter = null;
  });

  test('has a rooms adapter instance', () => {
    expect(webexSDKAdapter.roomsAdapter).toBeInstanceOf(RoomsSDKAdapter);
  });
});

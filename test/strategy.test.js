/* global describe, it, expect */
/* jshint expr: true */

var OutlookStrategy = require('../lib/strategy');

describe('Strategy', function() {
  var strategy = new OutlookStrategy(
    {
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {}
  );

  it('should be named windowslive', function() {
    expect(strategy.name).to.equal('windowslive');
  });
});

describe('Strategy.authorizationParams', function() {
  var strategy = new OutlookStrategy(
    {
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {}
  );

  it('returns "locale" param', function() {
    var params = { locale: 'en' };
    expect(strategy.authorizationParams(params)).to.deep.equal(params);
  });

  it('returns "display" param', function() {
    var params = { display: 'some' };
    expect(strategy.authorizationParams(params)).to.deep.equal(params);
  });

  it('returns "login_hint" param', function() {
    var params = { login_hint: 'some@email.com' };
    expect(strategy.authorizationParams(params)).to.deep.equal({
      login_hint: params.login_hint
    });
  });

  it('returns "prompt" param', function() {
    var params = { prompt: 'some@email.com' };
    expect(strategy.authorizationParams(params)).to.deep.equal({
      prompt: params.prompt
    });
  });

  it('returns a combination of valid params', function() {
    var params = {
      some: 'other param',
      display: 'some',
      login_hint: 'some@email.com',
      locale: 'en',
      invalid: 'param',
      prompt: 'login'
    };

    expect(strategy.authorizationParams(params)).to.deep.equal({
      display: params.display,
      login_hint: params.login_hint,
      locale: params.locale,
      prompt: params.prompt
    });
  });
});

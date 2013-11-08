/* 
 * JASMINE
 * suites, specs, matchers, custom matchers
 * beforeEach, afterEach
 * waitsFor/runs
 * spyOn
 * xit/iit/ddescribe
 *
*/

// suite
describe('User class', function() {

    var instance;

    beforeEach(function() {
        instance = new User();
    });

    // suite
    describe('setUsername function', function() {
        // spec
        it('should have setUsername method', function() {
            expect(instance.setUsername).toBeDefined();
        });

        // suite
        describe('with valid usernames', function() {
            // specs
            it('should accept simple usernames', function () {
                expect(instance.setUsername('jamesbond')).toBe(true);
            });
            it('should accept usernames with numbers', function () {
                expect(instance.setUsername('jamesbond007')).toBe(true);
            });
            // specs
            var valids = ['chucknorris', 'jeanclaudedus', 'georgeabitbol'];
            valids.forEach(function(username) {
                it('should accept "' + username + '"', function () {
                    expect(instance.setUsername(username)).toBe(true);
                });
            });
        });

        // suite
        describe('with invalid usernames', function() {
            // specs
            it('should throw error when too short', function () {
                expect(function(){
                    instance.setUsername('6chars');
                }).toThrow(new Error('invalid username'));
            });
            it('should throw error when too long', function () {
                expect(function(){
                    instance.setUsername('22charscharscharschars');
                }).toThrow(new Error('invalid username'));
            });
            it('should throw error when invalid characters', function () {
                expect(function(){
                    instance.setUsername('james-bond');
                }).toThrow(new Error('invalid username'));
                expect(function(){
                    instance.setUsername('james bond');
                }).toThrow(new Error('invalid username'));
            });
        });

        describe('username avalaibility check', function() {
            // specs
            it('should have usernameAvailable method', function() {
                expect(instance.usernameAvailable).toBeDefined();
            });
            it('should check avalaibility before setting username', function () {
                spyOn(instance, 'usernameAvailable').andCallThrough();
                instance.setUsername('jamesbond');
                expect(instance.usernameAvailable).toHaveBeenCalledWith('jamesbond');
            });
            it('should prevent administrator username', function () {
                expect(function(){
                   instance.setUsername('administrator');
                }).toThrow(new Error('username not available'));
            });
            it('should set username when available', function () {
                spyOn(instance, 'usernameAvailable').andReturn(true);
                var changed = instance.setUsername('jamesbond');
                expect(changed).toBe(true);
            });
            it('should throw error when not available', function () {
                spyOn(instance, 'usernameAvailable').andReturn(false);
                expect(function(){
                    instance.setUsername('jamesbond');
                }).toThrow(new Error('username not available'));
            });
            
        });

    });

});

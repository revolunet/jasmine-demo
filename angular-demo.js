
/* sample AngularJS+jasmine test */

describe('form submit', function() {
    var expectedData = {
        username: 'chucknorris',
        password: 'kicksass'
    };

    var ctrl, ctrlScope;
    beforeEach(function() {
        ctrlScope = $rootScope.$new();
        //Creating controller with assigning mocks instead of actual services
        ctrl = $controller('FormSubmitController', {
            $scope: ctrlScope
        });
        spyOn($window, 'alert').andReturn(true);
    });

    describe('server success should change success status', function() {
        expect(ctrlScope.success).toBe(false);
        $httpBackend.expectPOST('/submit', expectedData).respond({success: true});
        ctrl.submit();
        $httpBackend.flush();
        expect($window.alert).toHaveBeenCalledWith('submit success');
        expect(ctrlScope.success).toBe(true);
    });

    describe('server error should not change success status', function() {
        expect(ctrlScope.success).toBe(false);
        $httpBackend.expectPOST('/submit', expectedData).respond(500);
        ctrl.submit();
        $httpBackend.flush();
        expect($window.alert).toHaveBeenCalledWith('cannot submit your form');
        expect(ctrlScope.success).toBe(false);
    });

});

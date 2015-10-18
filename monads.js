var chai = require('chai');

chai.should();

/*slide
layout: true
class: center, middle
*/

/*slide
# Monad Primer.

paul@johnson.kiwi.nz
*/

/*slide
# Executable presentation.

[https://github.com/pj/monad_presentation](https://github.com/pj/monad_presentation)
???
Slides in markdown, code and tests in one file.
*/

/*slide
# Monad? Say what...?
*/

/*slide
# Curse of the Monad

*"In addition to it begin useful, it is also cursed and the curse of the monad
is that once you get the epiphany, once you understand - "oh that's what it is"
\- you lose the ability to explain it to anybody."*

**- Douglas Crockford**
???
So two possibilities:
- If I actually understand it then I won't be able to explain it to you.
- If I don't understand it then you'll learn it incorrectly.
*/

/*slide
Roughly analagous to design patterns in object oriented programming...

???
Hopefully more useful though... :)
Though more about combining/composing functions than about
composing/structuring objects.
*/

/*slide
... though a bit more general.
*/

/*slide
# Basic parts of the pattern

- An object that acts as a container and can possibly be "null-like".
- A function that takes the contained value and returns a new container
possibly with a new value.
- A function that takes the container and the function from to(if not "null-like" )
*/

/*slide
Complex subject, so only enough time to give a high level overview.

Will show examples of transforming "normal" code to monadic code.

Covered much more thorougly in
["Learn you a Haskell"](http://learnyouahaskell.com/).
*/

/*slide
#Example 1. Promises.

Asynchronous I/O.
???
Should be pretty familiar to everyone.
*/

function async_io_normal(cb) {

}

describe("async io normal", function(done){

});

/*slide
%(async_io_normal)s
*/

function async_io_monad() {

}

describe("async io monad", function(done){

});

/*slide
%(async_io_monad)s
???
Standard promises.

Meets the definition we had earlier:
Promise contains a value (in the future) or possibly a failure.
'then' function takes the value and
*/

/*slide
#Example 2. Option.

???
Present in many languages now, most people might be aware of it in Swift.
*/


function User(username, password, password_confirmation) {
    this.username = username;
    this.password = password;
    this.password_confirmation = password_confirmation;
}

function has_params_normal(params) {
    var username = params['username'];
    if (username) {
        var password = params['password'];
        if (password) {
            var password_confirmation = params['password_confirmation']
            if (password_confirmation) {
                return "has all required params";
            }
        }
    }

    return null;
}

describe("validate login normal", function(done){

});

/*slide
%(check_registration_normal)s
*/

function Some(value) {
    this.value = value;
}

Some.prototype.then = function(func) {
    return func(this.value);
}

var None = {
    then: function(func) {
        return this;
    }
}

// Probably a bad idea to extend Object, but makes things easier.
Object.prototype.has_attr = function(attribute) {
    if (this.hasOwnProperty(attribute)) {
        return new Some(attribute);
    } else {
        return None;
    }
}

function has_params_monad(params) {
    return params.has_attr('username')
        .then((username) => params.has_attr('password'))
        .then((password) => params.has_attr('password_confirmation'))
        .then((password_confirmation) => new Some("has all required params"));
}

describe("validate login monad", function(done){

});

/*slide
%(has_params_monad)s
???
Definition:
- Contains a value (Some) or nothing (None).
- functions that take value and return a new container.
- functions that take the container and then calls the value function if it's
not none.
*/

/*slide
#Example 3. Arrays/lists.

Getting all the items a user has ever purchased.
*/

function get_users_items_normal(users) {
    var items = [];
    for (user of users) {
        for (order of user.orders) {
            for (item of order.items) {
                items.push(item);
            }
        }
    }

    return items;
}

/*slide
%(get_users_items_normal)s
*/

Array.prototype.then = function(func) {
    var x = [];
    for (i of this) {
        x.push(func(i));
    }

    return x;
}

function get_users_items_monad(users) {
    return users
        .then((user) => user.orders)
        .then((order) => order.items);
}

describe("get user's items monad", function(){
    var users;

    before("load fixture from fixture.json"){

    });

    if("return the same value from the normal and monad version", function(){
        (get_users_items_normal(users) === get_users_items_monad(users))
            .should.be.equal;
    });
});

/*slide
%(get_users_items_monad)s
???
Definition:
- Container with one or more objects, empty can be thought of as null or none.
- functions return a new list.
- 'then' takes each item and passes it to the function then flattens results
together.
*/

/*slide
Example 4. State Monad.

???
All examples up to now have returned a simple value, however we don't have to
return simple values,
*/

function example_1_normal(cb) {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
%(example_1_normal)s
*/

function example_1_monad() {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
%(example_1_monad)s
???
What pr
*/

/*slide
Example 5. If/Else monad.
???
*/

function guard(){}

function if_else_normal(cb) {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
%(if_else_normal)s
*/

function example_1_monad() {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
%(example_1_monad)s
???
*/

/*slide
#What is a monad?

Aside from how they look and how they meet the definition I provided there
doesn't seem to be many commonalities...
*/

/*slide
#What is a monad?

Monads are an abstraction of computation itself.
*/

/*slide
#What is a monad?

Monads provide a way to create syntax for computations not built into the
language.

e.g. Async isn't built into javascript yet and other things will never be added
as syntax in the language.
*/

/*slide
#Some notes.

Calling Monads a container or box isn't strictly correct, it's more like the
context for your computation.

e.g. The context for promises is more than just whether it has a value or
failure. There are things like a TCP socket and event loop underneath.
*/

/*slide
#Some notes.

Although it's common, monads don't have to be sequential.

e.g. the If/Else monad doesn't execute every step of the computation.
*/

/*slide
#Some notes.

Monads are part of a larger family of functional patterns: Functors,
Applicatives, Monoids and more.
*/

/*slide
Questions?
*/

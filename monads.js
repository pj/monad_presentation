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
- you lose the ability to explain it to anybody."*

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
Example 1. Regular asynchronous/callback io.
???
Should be pretty familiar to everyone.
*/

function example_1_normal(cb) {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_normal}
*/

function example_1_monad() {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_monad}
???
What pr
*/

/*slide
Example 3. Arrays/lists.

Getting all the items a user has ever purchased.
???
Should be pretty familiar to everyone.
*/

function get_users_items_normal(users) {
    var items = [];
    for (user of users) {
        for (order of user.orders) {
            for (item of order.items) {

            }
        }
    }

    return items;
}

var user_fixture = {
    name: "Bob",
    orders: [
        {
            id: 1,
            items: [
                {

                },
                {

                }
            ]
        },
        {
            id: 1,
            items: [
                {

                },
                {

                }
            ]
        },
        {
            id: 1,
            items: [
                {

                },
                {

                }
            ]
        },
    ]
}

describe("get user's items normal", function(done){

});

/*slide
{get_users_items_normal}
*/

Array.prototype.then = function(func) {
    for (item of this) {

    }

}

function get_users_items_monad() {
    return user_fixture.users
        .then((user) => user.orders)
        .then((order) => order.items);
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_monad}
???
What pr
*/

/*slide
Example 4. State Monad.



???
All examples up to now
*/

function example_1_normal(cb) {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_normal}
*/

function example_1_monad() {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_monad}
???
What pr
*/

/*slide
Example 5. If/Else monad.
???
Should be pretty familiar to everyone.
*/

function example_1_normal(cb) {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_normal}
*/

function example_1_monad() {
    // TODO
}

describe("example 1 normal", function(done){

});

/*slide
{example_1_monad}
???
What pr
*/

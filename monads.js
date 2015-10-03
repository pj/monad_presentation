/*slide

#Monads for Mortals

paul@johnson.kiwi.nz

???

Some notes
*/

// Intro

/*slide

qwer
*/

// Option monad
function validateStuff(stuff) {
    if (stuff.get("username") == null) {
        return false;
    }

    if (stuff.get("password") == null) {
        return false;
    }

    if (stuff.get("confirmaion") == null) {
        return false;
    }

    return true;
}

function ifNotNullThenCallCallbackElseReturnNull(option, cb) {
    if (option == null) {
        return null;
    } else {
        return cb(option);
    }
}

function validateStuffM(stuff) {
    var username_or_null = stuff.get("username")
    var password_or_null = ifNotNullThenCallCallbackElseReturnNull(username_or_null, (username) => stuff.get("password"))
    var confirmation_or_null = ifNotNullThenCallCallbackElseReturnNull(password_or_null, (password) => stuff.get("confirmation"))

    return confirmation_or_null == null ? false : true;
}

// List monad
function get_users_items(users) {
    users_items = [];
    for (user of users) {
        for (order in user.orders) {
            for (item in order.items) {
                users_items.push(item);
            }
        }
    }

    return users_items;
}

function ifNotEmptyThenCallCallbackForEachAndFlattenElseReturnEmpty(list, cb) {
    var results = [];
    for (element of list) {
        var x = cb(element);
        results.concat(x);
    }

    return results;
}

var i56y = ifNotEmptyThenCallCallbackForEachAndFlattenElseReturnEmpty;

function get_users_items_m(users) {
    orders = i56y(users, (user) => user.orders)
    items = i56y(orders, (order) => order.items)
    return items;
}

// Future monad
function get_users_items_from_web(user_ids) {


}

function ifNotErrorCallCallbackElseReturnError(future, cb) {

}

var i35r = ifNotErrorCallCallbackElseReturnError;

function get_users_items_from_web_m(user_ids) {

}

// File monad

// Try/Catch monad

function something_that_might_fail() {
}

function something_that_might_fail_m() {
    var might_have_failed = "adsf";
}

// If/Then monad
function basic_if_else_m(possibly_true_possibly_not) {

}

function basic_if_else_m(possibly_true_possibly_not) {

}

// Continuation Monad

/**



**/

// syntax sugar in other languages
// haskell

// scala

// Hack syntax

function asdf() {
    //var valid = stuff.get("username") >>> (username) => stuff.get("password") >>>\
                //stuff.get("confirmation");

    var users_items;

}

# dugocodechallenge
Code Challenge Samples

-------------------------------------------
Beer Exchange

The beer exchange was a good brain tickler. I wrote it as a simple recursive loop that should work on a list of any size—not just 5 people. The shuffling of the list was done once at the start and the list was ‘walked’. I think that this is a pretty simple readable way to solve the problem. I randomized the ‘walking’ so that the result is not limited to a consistently patterned result. Although you could: that would likely optimize performance further and still be pseudo-random.

I know that recursive loops aren’t great for memory use because you basically have to create a new stack each time you start a new call to the function. I read about something called Tail Call Optimisation but JavaScript doesn’t support. Found a code pattern at this site which explains a method called ‘Trampolining’ and used a function decorator (see tco) to implement it. I didn’t quite wrap my head around the exact internals of the process, but I see that it basically gets out of the recursive problem by porting the list of functions to a loop. This way each recursive call is ended and destroyed before the next one is started.
That all said, I couldn’t get Mozilla or other browsers to crash on long lists of name data and I admit that I don’t know of a good way off the top of my head to quantify performance differences. Something to look into.
----------------------------------------
Ember Bug Fix

I haven’t worked with Ember.js before. The code sample you provided here is solved here:
https://gist.github.com/ryansutc/1dc45b1411a6e173e6ab7ff8d94cdec9
The code sample looked deceptively similar to Angular or Vue but I had to do some reading to figure out how to have the computed property listen to the change of another component property. Got it eventually and learned a few things about particularities of Ember along the way.
------------------------------------------
List Separate

This seems like a pretty simple task so I hope I didn’t miss what you’re after. I didn’t bother trying to read from an external file or anything. I just wrote a quick and dirty function that parses the text and formats it accordingly by basically just appending to a string.

There might be some methods in the javascript library that could optimize this better that veterans like yourself pull out of their hat. Would be curious if so.

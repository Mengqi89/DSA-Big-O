// 2. Even or odd
// constant time

// 3. Are you here ?
// polynomial time

// 4. Doubler
// linear time

// 5. Naive search
// linear time

// 6. Creating pairs:
// polynomial time

// 7. Compute the sequence
// linear time

// 8. An efficient search
// Logarithmic time

// 9. Random element
// constant time

//10. What Am I ?
// linear time

let tick = 0
function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
    if (height >= 1) {
        // Move a tower of height-1 to the buffer peg, using the destination peg.
        stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);

        // Move the remaining disk to the destination peg.
        console.log('Move disk from Tower ', srcP, ' to Tower ', desP);

        // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
        stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);

        console.log(tick)
    }
    tick++
    return;
}

stepsToSolveHanoiT(10, "A", "C", "B");
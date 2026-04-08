# Patterns

- Any multi-line pattern can be formed using nested loops

- Steps to build the pattern
  1. For the outer loop iteration count, determine the number of lines to be printed.
  2. For the inner loop iteration count, determine the number of characters in the line that has the most characters.
  3. Connect the iterations of the inner and outer loops using conditions to print the pattern.
  4. Use the inner loop for character printing with conditions that combine both inner and outer loops.
  5. Optionally, observe the patterns for symmetry

- Note for Printing
  - Outer loop controls the number of lines (top to bottom traversal).
  - Inner loop controls the number of characters per line (left to right traversal).
  - The pattern is formed by applying conditions that combine outer and inner loop indices.
  - The printing cursor always moves left to right, then top to bottom.

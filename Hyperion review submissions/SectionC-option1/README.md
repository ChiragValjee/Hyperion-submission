<h2>To build, test, and run the provided solution on Linux, macOS, and Windows operating systems, follow these steps:</h2>
<p>Clone the repository from the GitHub link: https://github.com/ChiragValjee/Hyperion-submission/.</p>
<p>Ensure that you have Node.js installed on your system. You can download it from the official website: https://nodejs.org.</p>
<p>Open a terminal or command prompt and navigate to the project directory.</p>
<p>Install the project dependencies by running the following command: npm install</p>
<p>Once the dependencies are installed, you can execute the script by running the following command: node index.js</p>
<p>This will execute the script</p>
<p>To modify the input numbers, you can edit the arguments passed to the sayNumber function inside the console.log statements in the code.</p>

###worst-case space complexity of the solution

We would need to analyze the memory usage as the input number increases.
In this case, the primary space-consuming operations are the creation of arrays to hold the words and string concatenation.
The space complexity can be broken down as follows:

The sayNumber function itself does not have any significant space requirements.
The numericToWords function creates a few local variables, but their memory usage is constant, regardless of the input number.
The main space complexity comes from the intermediate arrays used during the conversion process. 
In the worst case, when dealing with the largest supported number (trillions), the number of elements in the intermediate arrays will be proportional to the number of digits in the input number.

Therefore, we can approximate the space complexity of the solution as O(log N), where N represents the input number.

It's important to note that the intermediate arrays are temporary and get garbage collected by JavaScript's runtime, so the actual memory usage is limited to the peak usage during the execution and does not accumulate.









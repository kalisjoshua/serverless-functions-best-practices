using Microsoft.VisualStudio.TestTools.UnitTesting;
using Amazon.Lambda.TestUtilities;

namespace DotNetServerless.Tests
{
    [TestClass]
    public class FunctionTest
    {
        [TestMethod]
        public void GreetingTest()
        {
            TestLambdaContext context = new TestLambdaContext();

            var functions = new StepFunctionTasks();

            var state = new State
            {
                Name = "MyStepFunctions"
            };


            state = functions.Greeting(state, context);

            Assert.Equal(5, state.WaitInSeconds);
            Assert.Equal("Hello MyStepFunctions", state.Message);
        }
    }
}

//

//namespace DotNetServerless.Tests
//{
//    public class FunctionTest
//    {
//        public void TestGreeting()
//        {
//            TestLambdaContext context = new TestLambdaContext();

//            var functions = new StepFunctionTasks();

//            var state = new State
//            {
//                Name = "MyStepFunctions"
//            };


//            state = functions.Greeting(state, context);

//            Assert.Equal(5, state.WaitInSeconds);
//            Assert.Equal("Hello MyStepFunctions", state.Message);
//        }
//    }
//}
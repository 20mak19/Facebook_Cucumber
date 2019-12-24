package stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.webpages.ElementUtil;
import framework.webpages.LoginPage2;
import org.testng.Assert;

public class LoginPage2SD extends ElementUtil {

    private LoginPage2 loginPage2 = new LoginPage2();

    @When("^I enter (.+) into (firstname|lastname) text fields on home screen$")
    public void enterDataInto(String value, String textField){
       switch(textField){
                case"firstname":
                    loginPage2.enterName(value);
                    break;
                case"lastname":
                    loginPage2.enterLastName(value);
        }
    }
   @And("^I enter (.+) into (Mobilenumber) text fields on home screen$")
    public void enterEmailIntoEmailField(String anyText, String textField) throws InterruptedException {

        switch (textField){
            case "Mobilenumber":
                loginPage2.enterEmail(anyText);
        }
    }
    @And("^I click on password text field on home screen$")
    public void clickOnText() {
        loginPage2.clickOnPasswordText();

    }
    @And("^I click on email text field on home screen$")
    public void clickOnEmail() throws InterruptedException {
        loginPage2.clickOnSigupButtom();
        Thread.sleep(1000);
        loginPage2.clickEnterEmail();

    }
    @Then("^I verify Error Message for invalid email on homepage$")
    public void verifyEmail() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(loginPage2.getErrorMessage(), "Please enter a valid mobile number or email address.");
        System.out.println("Verified message : "+ loginPage2.getErrorMessage());
    }
    @After
    public void after(){
        SharedSD.after();
    }

}





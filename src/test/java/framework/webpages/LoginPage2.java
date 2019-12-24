package framework.webpages;

import org.openqa.selenium.By;

public class LoginPage2 extends ElementUtil{

    private By nameField = By.name("firstname");
    private By lastNameField = By.name("lastname");
    private By emailField = By.cssSelector("#u_0_k");
    private By signUpButton = By.name("websubmit");
    private By passwordText = By.xpath("//input[@id='u_0_p']");
    private By errorMessage = By.xpath("//div[contains(text(),'Please enter a valid mobile number or email address.')]");


    public void enterName(String name){
        setValue(nameField, name);
    }
    public void enterLastName(String lastName){
        setValue(lastNameField, lastName);
    }
    public void enterEmail(String email) throws InterruptedException {
        Thread.sleep(1000);
        setValue(emailField, email);
    }
    public void clickOnPasswordText(){
        clickOn(passwordText);
    }
    public void clickEnterEmail() throws InterruptedException {
        Thread.sleep(1000);
        clickOn(emailField);
    }
    public void clickOnSigupButtom(){
        clickOn(signUpButton);
    }
    public String getErrorMessage(){
       return  getTextFromElement(errorMessage);
    }
    }


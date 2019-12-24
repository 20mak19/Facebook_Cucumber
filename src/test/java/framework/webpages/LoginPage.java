package framework.webpages;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import stepdefinition.SharedSD;

import java.io.File;
import java.io.IOException;

public class LoginPage extends ElementUtil {

    private By nameField = By.name("firstname");
    private By lastNameField = By.name("lastname");
    private By signUpButton = By.name("websubmit");


    public void enterName(String name) {
        setValue(nameField, name);
    }

    public void enterLastName(String lastName) {
        setValue(lastNameField, lastName);

    }
    public void isElementEnabled() throws InterruptedException, IOException {
        boolean enable = isElementEnabled(signUpButton);
        if(isElementEnabled(signUpButton)){
        System.out.println("Signup button is disable : "+!enable);
        Thread.sleep(1000);
    }
        File src = ((TakesScreenshot) SharedSD.getDriver()).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(src, new File("/Users/makbuleangun/Desktop/res"));
    }
}




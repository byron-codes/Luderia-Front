describe("Usuário", () => {
  let userId = 15;
  let cardId;
  let addressId;
  let nickname;
  function generateString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateNumber(length) {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateCpf() {
    const num1 = random();
    const num2 = random();
    const num3 = random();

    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);

    return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
  }

  function dig(n1, n2, n3, n4) {
    let nums = n1.split("").concat(n2.split(""), n3.split(""));

    if (n4) {
      nums[9] = n4;
    }

    let x = 0;

    for (let i = n4 ? 11 : 10, j = 0; i >= 2; i--, j++) {
      x += parseInt(nums[j]) * i;
    }

    const y = x % 11;
    return y < 2 ? 0 : 11 - y;
  }

  function random() {
    const aleat = Math.floor(Math.random() * 999);
    return ("" + aleat).padStart(3, "0");
  }

  function login() {
    cy.visit("/");
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=login]").type(nickname);
    cy.get("[data-cy=password]").type("qwer1234");
    cy.get("[data-cy=btn-login]").click();
    cy.wait(2000);
  }

  it("CREATE", () => {
    nickname = generateString(10);
    cy.visit("/register");
    cy.wait(3000);
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get("[data-cy=name]").type("Nome do usuário");
    cy.get("[data-cy=email]").type(`${generateString(5)}@gmail.com`);
    cy.get("[data-cy=nickname]").type(nickname);
    cy.get("[data-cy=cpf]").type(generateCpf());
    cy.get("[data-cy=password]").type("qwer1234");
    cy.get("[data-cy=btn-save]").scrollIntoView();
    cy.wait(1000);
    cy.get("[data-cy=confirmPassword]").type("qwer1234");
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get(".swal-button").click();
  });
  it("SELECT", () => {
    cy.visit("/admin/users");
    cy.wait(5000);
  });
  it("LOGIN", () => {
    cy.visit("/");
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=login]").type(nickname);
    cy.get("[data-cy=password]").type("qwer1234");
    cy.get("[data-cy=btn-login]").click();
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=my-account]")
      .invoke("attr", "href")
      .then(sometext => {
        userId = sometext.split("/")[2];
        cy.log(userId);
      });
    cy.wait(3000);
  });
  it("UPDATE", () => {
    login();
    cy.visit(`/user/${userId}`);
    cy.get("[data-cy=name]").clear();
    cy.get("[data-cy=name]").type("nome do usuario");
    cy.get("[data-cy=email]").clear();
    cy.get("[data-cy=email]").type("nome@nome.com");
    cy.get("[data-cy=btn-update]").click();
    cy.wait(3000);
    cy.get(".swal-button").click();
  });
  it("CREATE CREDIT CARD", () => {
    login();
    cy.visit(`/user/${userId}/cards`);
    cy.get("[data-cy=card-number]").type(generateNumber(16));
    cy.get("[data-cy=card-name]").type(generateString(12));
    cy.get("[data-cy=card-valid]").type("0126");
    cy.get("[data-cy=card-cvv]").type(generateNumber(3));
    cy.get("[data-cy=btn-save]").click();
    cy.wait(3000);
    cy.get('input[id="cardSavedId"]')
      .invoke("val")
      .then(sometext => (cardId = sometext));
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.wait(5000);
  });
  it("DELETE CREDIT CARD", () => {
    login();
    cy.visit(`/user/${userId}/cards`);
    cy.get(`[data-cy=card-${cardId}]`).click();
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.wait(3000);
  });
  it("CREATE ADDRESS", () => {
    login();
    cy.visit(`/user/${userId}/addresses`);
    cy.get("[data-cy=cep]").type("08552400");
    cy.wait(3000);
    cy.get("[data-cy=number]").type(generateNumber(3));
    cy.get("[data-cy=btn-save]").click();
    cy.get('input[id="addressSavedId"]')
      .invoke("val")
      .then(sometext => (addressId = sometext));
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.wait(5000);
  });
  it("DELETE ADDRESS", () => {
    login();
    cy.visit(`/user/${userId}/addresses`);
    cy.get(`[data-cy=address-${addressId}]`).click();
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.wait(3000);
  });
  it("DELETE", () => {
    login();
    cy.visit(`/user/${userId}`);
    cy.wait(1000);
    cy.get("[data-cy=btn-delete]").click();
    cy.wait(3000);
    cy.get(".swal-button").click();
  });
});

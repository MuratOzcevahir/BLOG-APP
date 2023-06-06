import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
import { BrowserRouter, Route, Routes, json } from 'react-router-dom'
import Home from './component/back/BackApp'
import AddBlog from './component/back/page/AddBlog'
import BlogList from './component/back/page/BlogList'
import UpdateBlog from './component/back/page/UpdateBlog'
import GlobalApp from './GlobalApp'
import Login from './Login'
import TESTCRYPT from './TESTCRYPT.JS'
import axios from 'axios'
import TESTENCRYPT from './TESTENCRYPT'

function App() {
    const [encrypObj, setencrypObj] = useState("")
    const [nameChange, setnameChange] = useState("")

    const [setIp, setsetIp] = useState("")
    useEffect(() => {


        // axios.get("https://localhost:7147/Home/Index").then((data) => {
        //     console.log(data)
        // })
    }, [])
    function CreateUser() {
        var date = new Date().toJSON();
        var UserGameObj = { User: { Name: nameChange, Surname: "özcevahir", EmailAdress: "murat@", CreatedDate: date }, GameData: { TestPropA: "Wood", TestPropB: "food", UserId: -1, Amount: 1.29 } }
        console.log(UserGameObj, " userobj before everything")

        var UserGameObjString = JSON.stringify(UserGameObj)
        console.log(UserGameObjString, " userobj string before encryp")
        var key = CryptoJS.enc.Utf8.parse('6666666666666666');
        var iv = CryptoJS.enc.Utf8.parse('9999999999999999');

        var encryptedGameObj = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(UserGameObjString), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString()


        console.log(encryptedGameObj, " usergameobj encrpyted string");
        axios.post("https://localhost:7147/Home/SaveTest", encryptedGameObj, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => { console.log("res after then ", res) }).catch((err) => { "err if something occurs ", err })




    }


    function ShowEncrypObj() {
        console.log(encrypObj)

    }
    function DecryptDataFromApi() {

    
        var key = CryptoJS.enc.Utf8.parse("99999999999999999999999999999999");
        var iv = CryptoJS.enc.Utf8.parse("9999999999999999");
        axios.get("http://localhost:3001/Home/SendUserDataToSite").then((res) => {

            console.log(res.data, " gelen veri")

            var decrypted = CryptoJS.AES.decrypt(res.data.toString(), key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            console.log(decrypted.toString(CryptoJS.enc.Utf8));
            console.log(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)));
         

            // console.log(JSON.parse(data)  , " Objected data from api")
        })

        // var getobj = CryptoJS.enc.Utf8.parse(res.data);
        // var bytes = CryptoJS.AES.decrypt(getobj, secretPass);
        // console.log(bytes)
        // var veri = bytes.toString(CryptoJS.enc.Utf8);
        // setencrypObj("data " + veri);
    }
    function test5(params) {

        //ÇALIŞCAN CRYPOTO
        var key = CryptoJS.enc.Utf8.parse("99999999999999999999999999999999");
        var iv = CryptoJS.enc.Utf8.parse("9999999999999999");
        var plaintext = "şifrelenecek metin13qweqwe";

        // // Şifreleme
        // var ciphertext = CryptoJS.AES.encrypt(plaintext, key, {
        //     iv: iv,
        //     mode: CryptoJS.mode.CBC,
        //     padding: CryptoJS.pad.Pkcs7
        // });

        // console.log(ciphertext.toString())

        // // Çözme
        var jsonob = { a: 5, b: "12", c: { test: 2, bb: "1110-*" } }
        console.log(JSON.stringify(jsonob));

        var decrypted = CryptoJS.AES.decrypt("/y+G/mxi5ZYwL25JeA1YhKD2yeZAaaecx1RJijjgxpk0ysXLJt7h/DU1LqYoMa3AiVWvMucv5c0TGdisxzJKwA==".toString(), key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        console.log(decrypted.toString(CryptoJS.enc.Utf8));
        console.log(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)));


 
    }





    function testcpt() {
        var text = "urEO3XQmA6DFxTUPRekY+A=="
        var encryptedBytes = aesjs.utils.hex.toBytes(text);


        console.log(encryptedBytes)
        var keyBytes = new TextEncoder().encode("99999999999999999999999999999999");
        var ivBytes = new TextEncoder().encode("9999999999999999");

        var aes = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes);
        var decryptedBytes = aes.decrypt(encryptedBytes);

        var decryptedText = new TextDecoder().decode(decryptedBytes);
        console.log(decryptedText);
    }
    function testecnryt() {


        var key = CryptoJS.enc.Utf8.parse('8056483646328763');
        var iv = CryptoJS.enc.Utf8.parse('8056483646328763');

        var encrptedData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(("hasan murat" + new Date().getMilliseconds()).toString()), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString();

        console.log(encrptedData)


    }
    //creating function to load ip address from the API
    const getData = async () => {


        const res = await axios.get('https://geolocation-db.com/json/')
        // console.log(res.data);
        setsetIp(JSON.stringify(res.data))





    }
    function SendDataToDB() {
        var CSprestigeResetOBJ =
        // called as GameObject in context
        {
            Profile: { Level: 0, Experiance: 0, CurrentExperiance: 0 },
            Civilization: {
                Population: 0,
                TotalFoodReduce: 0,
                House: {
                    General: {
                        Level: 0,
                        Amount: 1,
                    },
                    Detail: {
                        Multiply: 1,
                        Capacity: 5
                    },
                    UpdatePrice: { Coin: 100, Wood: 100 }

                },
            },
            Resource: {
                Coin: {
                    General: { Amount: 10, Level: 0 },
                    Detail: { Power: 1, Multiply: 1, Autosell: false },
                    UpdatePrice: { Coin: 1000 }
                },
                Wood: {
                    General: { Amount: 25, Level: 0 },
                    Detail: { Power: 1, Multiply: 1 },
                    UpdatePrice: { Coin: 10 }
                },
                Food: {
                    General: { Amount: 10, Level: 0 },
                    Detail: { Power: 0.1, Multiply: 1 },
                    UpdatePrice: { Coin: 0 }
                },
            },
            Storage: {
                WoodStorage: {
                    General: {
                        Level: 0, Capacity: 100
                    },
                    Detail: {
                        BuyPrice: {
                            Wood: 10, Coin: 10
                        },
                        UpdatePrice: {
                            Coin: 1
                        }
                    }
                },
                FoodStorage: {
                    General: {
                        Level: 0, Capacity: 10
                    },
                    Detail: {
                        BuyPrice: {
                            Wood: 10, Coin: 10
                        },
                        UpdatePrice: {
                            Coin: 10
                        }
                    }
                }
            },
            Worker: {
                WoodWorker: {
                    General: {
                        Level: 0, Amount: 0
                    },
                    Detail: {
                        Power: 0.01,
                        Multiply: 1,
                        FoodReduce: 0.2,
                        BuyPrice: { Wood: 1, Coin: 1, Food: 1 }
                    },
                    UpdatePrice: { Coin: 1 },
                    CanWork: true
                },
                FoodWorker: {
                    General: {
                        Level: 0, Amount: 0
                    },
                    Detail: {
                        Power: 0,
                        Multiply: 0,
                        FoodReduce: 0,
                        BuyPrice: { Wood: 0, Coin: 0, Food: 0 }
                    },
                    UpdatePrice: { Coin: 0 },
                    CanWork: false
                }
            },
            Achievement: {
                Civilization: {
                    Population: { Amount: { Reach: 0, Current: 0 } },
                    House: { Amount: { Reach: 0, Current: 0 } }
                },
                Profile: { Level: { Reach: 0, Current: 0 } },
                Resource: {
                    Coin: { Amount: { Reach: 0, Current: 0 } },
                    Wood: { Amount: { Reach: 20, Current: 0 } },
                    Food: { Amount: { Reach: 0, Current: 0 } },
                },
                Worker: { Amount: { Reach: 0, Current: 0 } },
            },
            ERROR: { GlobalError: "" },
            Statistic: {}
        }

        // console.log(CSprestigeResetOBJ)

        var date = new Date().toJSON();

        // console.log(date, " ilk date")
        var test2 = { Test: { Name: "qweqwe", Surname: "qweqwe123", EmailAdress: "c" }, User: { UserTest: { Name: nameChange, Surname: setIp, EmailAdress: "c", CreatedDate: date } } };

        var test3 = { ABC: { AAA: 1, BBB: 2 }, C: setIp }
        var newObject = { test2, test3 };
        var newObjString = JSON.stringify(newObject)
        var stringfiedObj = JSON.stringify(CSprestigeResetOBJ);
        // console.log(date.to)
        // console.log(newObjString)

        var testValue = { innerValue: { level1: 5, level2: 3, level3: { level1a: 5, level1b: 6 } } }
        var value = { Data: { data1: { datain1: 1, datain2: 2 } } }

        var key = CryptoJS.enc.Utf8.parse('6666666666666666');
        var iv = CryptoJS.enc.Utf8.parse('9999999999999999');
        var encrptedData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(newObjString), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString();

        // console.log(encrptedData, " şifrelemeden sonraki obce")
        axios.post('http://localhost3001/Home/Add', encrptedData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            // console.log("başarılı")

            // window.location.href = "http://88.232.76.142:3000/"
        }).catch((err) => {

            // console.log(err + " hatalandınz") 

        })
    }
    return (<div>Veritabanına Kaydet
        <br></br>
        <input type="text" onChange={(e) => { setnameChange(e.target.value) }} value={nameChange} style={{ height: "45px", borderRadius: "5px" }} />


        <button onClick={() => {
            console.log("ekle çalıştı")

            SendDataToDB()
        }}>EKLE</button>

        <button type="button" onClick={() => { DecryptDataFromApi() }}>Get User From Api</button>
        <button type="button" onClick={() => { ShowEncrypObj() }}>Objeyi göster</button>
        <button type="button" onClick={() => { testecnryt() }}>Test encrpyy</button>
        <button type="button" onClick={() => { testcpt() }}>Test chatcps</button>
        <button type="button" onClick={() => { test5() }}>yest 55s</button>


        {/* <button onClick={() => {
            console.log("Createuser çalıştı")

            CreateUser()
        }}>TEST2 TO 2 DİFF TABLE 1 ACTİON</button> */}



        <TESTENCRYPT />
    </div>)


}






export default App
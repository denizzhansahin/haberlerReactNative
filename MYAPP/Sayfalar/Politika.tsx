import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'


function Politika() {
    return (
        <ScrollView>

            <Card>

                <Card.Content>
                    <Text variant="titleLarge">Haberler Uygulaması Gizlilik Politikası ve Kullanım Koşulları
                    </Text>
                    <Text variant="bodyMedium">



                        Giriş

                        Bu belge, Haberler uygulamasının gizlilik politikasını ve kullanım koşullarını açıklar. Bu uygulama, React Native ile yazılmış ve Firebase tarafından desteklenmektedir. Uygulama, kullanıcı bilgisi toplamaz, işlemez ve paylaşmaz. Kişisel bilgiler depolanmaz.

                        Gizlilik Politikası

                        Haberler uygulaması, kullanıcıların kimliklerini veya kişisel bilgilerini belirlemek veya izlemek için tasarlanmamıştır. Uygulama, kullanıcıların uygulama ile etkileşimi hakkında anonim veriler toplayabilir. Bu veriler, uygulama deneyimini geliştirmek ve hataları düzeltmek için kullanılır.

                        Haberler uygulaması, kullanıcıların rızası olmadan kişisel bilgilerini üçüncü taraflarla paylaşmaz.

                        Kullanım Koşulları

                        Haberler uygulamasını kullanarak, bu Kullanım Koşullarını kabul etmiş sayılırsınız. Bu Koşulları kabul etmiyorsanız, uygulamayı kullanmamalısınız.

                        Haberler uygulamasını yalnızca yasal ve etik amaçlar için kullanabilirsiniz. Uygulamayı yasa dışı veya yetkisiz amaçlar için kullanmak yasaktır.

                        Haberler uygulamasını kullanarak, telif hakkı, ticari marka veya diğer fikri mülkiyet haklarını ihlal etmeyeceğinizi kabul edersiniz.

                        Haberler uygulamasını kullanarak, uygulamada yer alan herhangi bir içeriği kopyalamayacağınızı, çoğaltmayacağınızı, dağıtmayacağınızı, değiştirmeyeceğinizi veya türev eserler oluşturmayacağınızı kabul edersiniz.

                        Haberler uygulamasını kullanarak, uygulamanın çalışmasını bozacak veya engelleyebilecek herhangi bir eylemde bulunmayacağınızı kabul edersiniz.

                        Haberler uygulaması, "olduğu gibi" ve "herhangi bir garanti olmaksızın" sağlanır. Geliştirici, uygulamanın kullanımıyla ilgili herhangi bir doğrudan veya dolaylı zarardan sorumlu değildir.

                        Değişiklikler

                        Bu Gizlilik Politikası ve Kullanım Koşulları önceden bildirilmeksizin değiştirilebilir. Değişiklikleri kabul edip etmediğinizi belirlemek için bu sayfayı düzenli olarak kontrol etmenizi öneririz.

                        İletişim

                        Bu Gizlilik Politikası veya Kullanım Koşulları ile ilgili herhangi bir sorunuz varsa, lütfen 16008121013@ogr.bozok.edu.tr adresinden bizimle iletişime geçebilirsiniz.
                    </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default Politika
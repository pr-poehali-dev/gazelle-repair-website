import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Двигатель и трансмиссия",
      description: "Диагностика, ремонт и замена узлов двигателя, КПП, сцепления",
      price: "от 3 000 ₽"
    },
    {
      icon: "Cog",
      title: "Ходовая часть",
      description: "Ремонт подвески, замена амортизаторов, сайлентблоков",
      price: "от 2 500 ₽"
    },
    {
      icon: "Gauge",
      title: "Компьютерная диагностика",
      description: "Полная диагностика всех систем автомобиля на современном оборудовании",
      price: "от 1 500 ₽"
    },
    {
      icon: "CircuitBoard",
      title: "Электрика",
      description: "Ремонт электропроводки, генератора, стартера, установка дополнительного оборудования",
      price: "от 1 800 ₽"
    },
    {
      icon: "Wind",
      title: "Система охлаждения",
      description: "Ремонт радиатора, замена помпы, термостата",
      price: "от 2 000 ₽"
    },
    {
      icon: "Disc",
      title: "Тормозная система",
      description: "Замена колодок, дисков, ремонт суппортов",
      price: "от 2 200 ₽"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опыт 15+ лет",
      description: "Специализируемся на Газелях с 2009 года"
    },
    {
      icon: "Clock",
      title: "Срочный ремонт",
      description: "Большинство работ выполняем за 1-2 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "До 12 месяцев на выполненные работы"
    },
    {
      icon: "Wallet",
      title: "Честные цены",
      description: "Прозрачное ценообразование без скрытых платежей"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-white sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold">Газель Центр</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative bg-secondary text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/23934174-802d-431e-a5f2-d7cd059e4665/files/2a4c1af6-0b51-4cc8-866f-f5f4d7314b85.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональный ремонт Газелей
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Быстро, качественно, с гарантией. Работаем с автомобилями любой комплектации.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на ремонт
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию коммерческих автомобилей Газель
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашем сервисе</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Газель Центр</strong> — это команда профессионалов с 15-летним опытом работы. 
                  Мы специализируемся исключительно на автомобилях Газель всех модификаций.
                </p>
                <p>
                  Наш автосервис оснащён современным диагностическим оборудованием и инструментами. 
                  Мы используем только качественные запчасти и материалы от проверенных поставщиков.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-foreground mb-2">
                    <Icon name="CheckCircle" size={20} className="inline mr-2 text-primary" />
                    Наша миссия
                  </p>
                  <p>
                    Обеспечить максимальную надёжность коммерческого транспорта наших клиентов 
                    и минимизировать время простоя техники.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Отремонтировано авто</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/23934174-802d-431e-a5f2-d7cd059e4665/files/2a4c1af6-0b51-4cc8-866f-f5f4d7314b85.jpg"
                alt="Автосервис"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом или оставьте заявку
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Нижний Новгород, ул. Монастырка 1В/1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@gazel-service.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0 overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3f8e8f8e8e8e8e8e8e8e8e8e8e8e8e8&amp;source=constructor"
                    width="100%" 
                    height="400" 
                    frameBorder="0"
                    title="Карта проезда"
                    className="rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" required />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите проблему с автомобилем" rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={28} className="text-primary" />
              <span className="text-xl font-bold">Газель Сервис</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2024 Газель Сервис. Все права защищены.</p>
              <p className="text-sm text-gray-400">Профессиональный ремонт коммерческого транспорта</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
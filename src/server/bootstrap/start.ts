import Application from "../foundation/Application";
import HttpServiceProvider from "../http/providers/HttpServiceProvider";
import SmtpServiceProvider from "../smtp/providers/SmtpServiceProvider";
import NuxtServiceProvider from "../nuxt/providers/NuxtServiceProvider";
import SocketServiceProvider from "../socket/providers/SocketServiceProvider";

const app = new Application();

app.register(new HttpServiceProvider());
app.register(new NuxtServiceProvider());
app.register(new SmtpServiceProvider());
app.register(new SocketServiceProvider());

export default app
import { useMemo, useState } from 'react';

const initialWorkers = ['Ravi', 'Priya', 'Anil', 'Geeta', 'Sunil'];
const coconutTypes = ['Mature Coconut', 'Tender Coconut', 'Green Coconut', 'Dry Coconut'];
const workerTabs = ['Dashboard', 'Workers'];

const initialEntries = [
  { worker: 'Ravi', quantity: 84, type: 'Mature Coconut', rate: 12, date: '2026-08-07' },
  { worker: 'Priya', quantity: 68, type: 'Tender Coconut', rate: 11, date: '2026-08-07' },
  { worker: 'Anil', quantity: 56, type: 'Green Coconut', rate: 10, date: '2026-08-06' },
  { worker: 'Geeta', quantity: 73, type: 'Mature Coconut', rate: 12, date: '2026-08-05' },
  { worker: 'Sunil', quantity: 49, type: 'Dry Coconut', rate: 9, date: '2026-08-03' }
];

const formatNumber = (value) => value.toLocaleString();

const isSameDay = (dateA, dateB) => {
  const first = new Date(dateA);
  const second = new Date(dateB);
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

const isWithinDays = (dateString, days) => {
  const target = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - target) / (1000 * 60 * 60 * 24));
  return diff >= 0 && diff < days;
};

function Admin() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [workerList, setWorkerList] = useState(initialWorkers);
  const [entries, setEntries] = useState(initialEntries);
  const [selectedWorker, setSelectedWorker] = useState(initialWorkers[0]);
  const [selectedType, setSelectedType] = useState(coconutTypes[0]);
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [entryDate, setEntryDate] = useState(new Date().toISOString().slice(0, 10));
  const [newWorkerName, setNewWorkerName] = useState('');
  const [showWorkerForm, setShowWorkerForm] = useState(false);
  const [showCoconutForm, setShowCoconutForm] = useState(false);

  const today = new Date().toISOString().slice(0, 10);

  const summary = useMemo(() => {
    const totalCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
    const todayCount = entries.filter((entry) => isSameDay(entry.date, today)).reduce((sum, entry) => sum + entry.quantity, 0);
    const weeklyTotal = entries.filter((entry) => isWithinDays(entry.date, 7)).reduce((sum, entry) => sum + entry.quantity, 0);
    const monthlyTotal = entries
      .filter((entry) => {
        const entryDateObj = new Date(entry.date);
        const now = new Date(today);
        return entryDateObj.getFullYear() === now.getFullYear() && entryDateObj.getMonth() === now.getMonth();
      })
      .reduce((sum, entry) => sum + entry.quantity, 0);

    return {
      totalCount,
      todayCount,
      weeklyTotal,
      monthlyTotal
    };
  }, [entries, today]);

  const workerStats = useMemo(
    () =>
      workerList.map((name) => {
        const workerEntries = entries.filter((entry) => entry.worker === name);
        const todayCount = workerEntries.filter((entry) => isSameDay(entry.date, today)).reduce((sum, entry) => sum + entry.quantity, 0);
        const weeklyCount = workerEntries.filter((entry) => isWithinDays(entry.date, 7)).reduce((sum, entry) => sum + entry.quantity, 0);
        const monthlyCount = workerEntries
          .filter((entry) => {
            const entryDateObj = new Date(entry.date);
            const now = new Date(today);
            return entryDateObj.getFullYear() === now.getFullYear() && entryDateObj.getMonth() === now.getMonth();
          })
          .reduce((sum, entry) => sum + entry.quantity, 0);

        return { name, today: todayCount, weekly: weeklyCount, monthly: monthlyCount };
      }),
    [entries, today, workerList]
  );

  const recentEntries = useMemo(
    () => [...entries].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5),
    [entries]
  );

  const handleAddWorker = (event) => {
    event.preventDefault();
    const trimmedName = newWorkerName.trim();
    if (!trimmedName || workerList.includes(trimmedName)) return;
    setWorkerList((current) => [...current, trimmedName]);
    setSelectedWorker(trimmedName);
    setNewWorkerName('');
    setShowWorkerForm(false);
  };

  const handleAddEntry = (event) => {
    event.preventDefault();
    if (!selectedWorker || !selectedType || !quantity || !rate || !entryDate) return;
    setEntries((current) => [
      { worker: selectedWorker, quantity: Number(quantity), type: selectedType, rate: Number(rate), date: entryDate },
      ...current
    ]);
    setQuantity('');
    setRate('');
    setSelectedType(coconutTypes[0]);
    setEntryDate(today);
    setShowCoconutForm(false);
  };

  return (
    <main className="min-h-screen bg-[#eaf7ff] px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-brand-green px-6 py-10 text-white shadow-2xl shadow-brand-green/20 sm:px-10 sm:py-14">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/80">Admin dashboard</p>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Coconut trading control panel</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Use the dashboard and workers view to track daily buy counts, manage your team, and record coconut entries professionally.
              </p>
            </div>
            <div className="grid gap-4 rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <div className="rounded-[1.75rem] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">Today buy count</p>
                <p className="mt-3 text-3xl font-bold">{formatNumber(summary.todayCount)}</p>
              </div>
              <div className="rounded-[1.75rem] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">Total coconut count</p>
                <p className="mt-3 text-3xl font-bold">{formatNumber(summary.totalCount)}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/40 dark:bg-slate-950 dark:shadow-black/10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-green">Admin controls</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Dashboard & worker data</h2>
            </div>
            <div className="flex flex-wrap gap-3 rounded-full border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-900">
              {workerTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === tab ? 'bg-brand-green text-white shadow-lg' : 'text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.7fr_0.55fr]">
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {activeTab === 'Dashboard' && (
                <>
                  <div className="rounded-[1.75rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Snapshot overview</p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Today's buying activity</h3>
                      </div>
                      <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {formatNumber(summary.todayCount)} coconuts bought today
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-slate-200 p-4 dark:border-slate-800">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Weekly total</p>
                        <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{formatNumber(summary.weeklyTotal)}</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-slate-200 p-4 dark:border-slate-800">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Monthly total</p>
                        <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{formatNumber(summary.monthlyTotal)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Recent coconut entries</p>
                    <div className="mt-5 space-y-4">
                      {recentEntries.map((entry, index) => (
                        <div key={`${entry.worker}-${entry.date}-${index}`} className="rounded-[1.5rem] border border-slate-200 p-4 dark:border-slate-800">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white">{entry.worker}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{entry.type} · {formatNumber(entry.quantity)} pcs · ₹{entry.rate}/pc</p>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{entry.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'Workers' && (
                <div className="rounded-[1.75rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Workers panel</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Team buy activity</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setShowWorkerForm((current) => !current);
                          setShowCoconutForm(false);
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90"
                      >
                        Add worker
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowCoconutForm((current) => !current);
                          setShowWorkerForm(false);
                        }}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        Add coconut entry
                      </button>
                    </div>
                  </div>

                  {showWorkerForm && (
                    <form onSubmit={handleAddWorker} className="mt-6 rounded-[1.5rem] border border-brand-green/10 bg-[#f0fff4] p-5 dark:border-brand-green/20 dark:bg-slate-900">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          Worker name
                          <input
                            type="text"
                            value={newWorkerName}
                            onChange={(event) => setNewWorkerName(event.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-green dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            placeholder="Enter worker name"
                          />
                        </label>
                        <div className="flex items-end">
                          <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90"
                          >
                            Save worker
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {showCoconutForm && (
                    <form onSubmit={handleAddEntry} className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          Worker
                          <select
                            value={selectedWorker}
                            onChange={(event) => setSelectedWorker(event.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-green dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                          >
                            {workerList.map((worker) => (
                              <option key={worker} value={worker}>{worker}</option>
                            ))}
                          </select>
                        </label>

                        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          Coconut type
                          <select
                            value={selectedType}
                            onChange={(event) => setSelectedType(event.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-green dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                          >
                            {coconutTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </label>

                        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          Quantity
                          <input
                            type="number"
                            min="0"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-green dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            placeholder="Quantity"
                          />
                        </label>

                        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          Rate
                          <input
                            type="number"
                            min="0"
                            value={rate}
                            onChange={(event) => setRate(event.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-green dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            placeholder="Rate per coconut"
                          />
                        </label>

                        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                          Date
                          <input
                            type="date"
                            value={entryDate}
                            onChange={(event) => setEntryDate(event.target.value)}
                            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-green dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                          />
                        </label>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green/90"
                        >
                          Save coconut entry
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Worker count</p>
                      <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{workerList.length}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Today buy count</p>
                      <p className="mt-3 text-3xl font-bold text-brand-green">{formatNumber(summary.todayCount)}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {workerStats.map((worker) => (
                      <div key={worker.name} className="rounded-[1.5rem] border border-slate-200 p-4 dark:border-slate-800">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-lg font-semibold text-slate-900 dark:text-white">{worker.name}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Today's buys · weekly · monthly</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{formatNumber(worker.today)} today</span>
                            <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{formatNumber(worker.weekly)} wk</span>
                            <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{formatNumber(worker.monthly)} mo</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brand-green">Quick insights</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">Performance pulse</h3>
              </div>
              <div className="rounded-[1.75rem] bg-[#deffea] p-6 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Inventory health</p>
                <p className="mt-3 text-3xl font-bold text-brand-green">Stable</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Stock levels are balanced for immediate dispatch.</p>
              </div>
              <div className="rounded-[1.75rem] bg-[#fff2d9] p-6 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Worker utilization</p>
                <p className="mt-3 text-3xl font-bold text-[#b37b00]">82%</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Most workers are performing near daily target.</p>
              </div>
              <div className="rounded-[1.75rem] bg-[#e8f0ff] p-6 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Today’s buy count</p>
                <p className="mt-3 text-3xl font-bold text-[#1947a3]">{formatNumber(summary.todayCount)}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Confirmed coconut purchases for today.</p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;

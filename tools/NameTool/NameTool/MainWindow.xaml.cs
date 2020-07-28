using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace NameTool
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private int slideValue = 0;
        private string text;
        public MainWindow()
        {
            InitializeComponent();
        }

        private void textBoxValue_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (textBoxValue != null && lableOutputText != null && sliderVale != null)
            {
                text = textBoxValue.Text;
                UpdateText();
            }
        }

        private void sliderVale_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            if (textBoxValue != null && lableOutputText != null && sliderVale != null)
            {
                slideValue = (int)sliderVale.Value;
                labelSlideValue.Content = slideValue;
                UpdateText();
            }
        }

        private void UpdateText()
        {
            var array = text.ToCharArray();
            var output = new List<string>();
            foreach (var val in array)
            {
                var num = ((int)val) + slideValue;
                output.Add(char.ConvertFromUtf32( num));
            }

            lableOutputText.Content = string.Join("", output);

        }

        private void textBoxValue_Loaded(object sender, RoutedEventArgs e)
        {
            text = textBoxValue.Text;
            UpdateText();

        }
    }
}
